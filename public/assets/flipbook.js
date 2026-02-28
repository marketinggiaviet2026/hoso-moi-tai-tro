// Flipbook JavaScript - Wireframe Implementation
class Flipbook {
    constructor() {
        this.currentPage = 1;
        this.totalPages = 15;
        this.pages = {};
        this.initAsync();
    }

    async initAsync() {
        this.bindEvents();
        this.renderLoading();

        try {
            await this.loadContentFromMarkdown();
        } catch (err) {
            this.pages = this.generatePages();
        }

        this.loadPage(1);
        this.updateUI();
        this.updateTOC();
    }

    renderLoading() {
        const pageContent = document.getElementById('page-content');
        if (!pageContent) return;
        pageContent.className = 'page loading';
        pageContent.innerHTML = '<div class="loading">Đang tải nội dung…</div>';
    }

    async loadContentFromMarkdown() {
        const md = await this.fetchContentMd();
        const sections = this.parseContentMd(md);

        // Start with a safe fallback skeleton, then overwrite with parsed content.
        const pages = this.generatePages();
        this.applyContentToPages(pages, sections);
        this.pages = pages;
    }

    async fetchContentMd() {
        // Works on dev server / static hosting. If opened from file://, fetch may fail.
        const res = await fetch('/CONTENT.md', { cache: 'no-store' });
        if (!res.ok) {
            throw new Error(`Failed to load CONTENT.md: ${res.status}`);
        }
        return await res.text();
    }

    parseContentMd(mdText) {
        const text = String(mdText || '').replace(/\r\n/g, '\n');
        const lines = text.split('\n');

        const sections = {};
        let currentKey = null;

        for (const rawLine of lines) {
            const line = rawLine || '';
            const m = line.match(/^##\s+(\d+)\)\s+(.+)\s*$/);
            if (m) {
                currentKey = m[1];
                sections[currentKey] = { title: m[2].trim(), lines: [] };
                continue;
            }
            if (!currentKey) continue;
            sections[currentKey].lines.push(line);
        }

        const normalized = {};
        Object.keys(sections).forEach((k) => {
            normalized[k] = {
                title: sections[k].title,
                body: sections[k].lines.join('\n').trim(),
            };
        });
        return normalized;
    }

    markdownToHtml(md) {
        const src = String(md || '').replace(/\r\n/g, '\n');
        const lines = src.split('\n');

        const out = [];
        let i = 0;

        const inline = (s) => {
            return String(s)
                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
        };

        const flushParagraph = (buf) => {
            const text = buf.join(' ').trim();
            if (!text) return;
            out.push(`<p>${inline(text)}</p>`);
        };

        while (i < lines.length) {
            const line = lines[i];

            // Skip top-level title/commentary that may appear inside body
            if (!line.trim()) {
                i++;
                continue;
            }

            // Headings
            let m;
            m = line.match(/^####\s+(.+)$/);
            if (m) {
                out.push(`<h3>${inline(m[1].trim())}</h3>`);
                i++;
                continue;
            }
            m = line.match(/^###\s+(.+)$/);
            if (m) {
                out.push(`<h3>${inline(m[1].trim())}</h3>`);
                i++;
                continue;
            }

            // Tables (pipe markdown)
            if (line.includes('|') && i + 1 < lines.length && /\|\s*---/.test(lines[i + 1])) {
                const headerLine = line;
                const dividerLine = lines[i + 1];
                if (dividerLine.includes('|')) {
                    const readRow = (rowLine) => rowLine
                        .trim()
                        .replace(/^\|/, '')
                        .replace(/\|$/, '')
                        .split('|')
                        .map((c) => inline(c.trim()));

                    const headers = readRow(headerLine);
                    const rows = [];
                    i += 2;
                    while (i < lines.length && lines[i].includes('|') && lines[i].trim().startsWith('|')) {
                        rows.push(readRow(lines[i]));
                        i++;
                    }

                    out.push('<table class="table">');
                    out.push('<thead><tr>' + headers.map((h) => `<th>${h}</th>`).join('') + '</tr></thead>');
                    out.push('<tbody>');
                    rows.forEach((r) => {
                        out.push('<tr>' + r.map((c) => `<td>${c}</td>`).join('') + '</tr>');
                    });
                    out.push('</tbody></table>');
                    continue;
                }
            }

            // Unordered list
            if (/^\s*-\s+/.test(line)) {
                out.push('<ul>');
                while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
                    const item = lines[i].replace(/^\s*-\s+/, '').trim();
                    out.push(`<li>${inline(item)}</li>`);
                    i++;
                }
                out.push('</ul>');
                continue;
            }

            // Ordered list (1) / 1.
            if (/^\s*\d+[\)\.]\s+/.test(line)) {
                out.push('<ol>');
                while (i < lines.length && /^\s*\d+[\)\.]\s+/.test(lines[i])) {
                    const item = lines[i].replace(/^\s*\d+[\)\.]\s+/, '').trim();
                    out.push(`<li>${inline(item)}</li>`);
                    i++;
                }
                out.push('</ol>');
                continue;
            }

            // Paragraphs: consume until blank line
            const buf = [];
            while (i < lines.length && lines[i].trim()) {
                // Stop paragraph before a structural element
                if (/^###\s+/.test(lines[i]) || /^####\s+/.test(lines[i]) || /^\s*-\s+/.test(lines[i]) || /^\s*\d+[\)\.]\s+/.test(lines[i])) {
                    break;
                }
                buf.push(lines[i].trim());
                i++;
            }
            flushParagraph(buf);
        }

        return out.join('\n');
    }

    applyContentToPages(pages, sections) {
        // 1) HERO -> cover
        const hero = sections['1']?.body;
        if (hero) {
            // Keep the existing cover layout but ensure it stays aligned with CONTENT.md.
            // We intentionally keep placeholders as-is.
            pages[1].title = 'HỒ SƠ MỜI TÀI TRỢ';
            pages[1].subtitle = 'Hội Nghị Quốc Tế MEKONG TESOL Lần 5';
            pages[1].theme = '"Beyond Language: Re-Empowering Learners through Skills, Emotions, and Connections"';
            pages[1].organizers = ['Trung tâm Anh ngữ Gia Việt', 'Sở Giáo dục và Đào tạo Thành phố Cần Thơ'];
            pages[1].cta = 'mekongtesol@gmail.com';
        }

        // 2) Thư mời tài trợ -> pages 2-3
        const invite = sections['2']?.body;
        if (invite) {
            const paras = invite
                .split(/\n\s*\n/g)
                .map((p) => p.trim())
                .filter(Boolean)
                .map((p) => `<p>${p.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</p>`);

            // Split roughly in half to keep 2 pages.
            const mid = Math.ceil(paras.length / 2);
            pages[2].content = paras.slice(0, mid).join('\n');
            pages[3].content = paras.slice(mid).join('\n');
        }

        // 3) Thông tin chung -> page 4
        const info = sections['3']?.body;
        if (info) {
            pages[4].content = this.markdownToHtml(info);
        }

        // 4) Timeline -> page 5
        const timeline = sections['4']?.body;
        if (timeline) {
            // Convert bullet list items into timeline blocks if possible.
            const items = timeline
                .split('\n')
                .map((l) => l.trim())
                .filter((l) => l.startsWith('- '))
                .map((l) => l.replace(/^\-\s+/, ''));

            if (items.length) {
                pages[5].content = `
                    <div class="timeline">
                        ${items
                            .map((it) => {
                                const parts = it.split(':');
                                const left = (parts[0] || '').trim();
                                const right = parts.slice(1).join(':').trim() || left;
                                const date = parts.length > 1 ? left : '';
                                const event = parts.length > 1 ? right : it;
                                return `
                                    <div class="timeline-item">
                                        <div class="timeline-date">${date}</div>
                                        <div class="timeline-event">${event}</div>
                                    </div>
                                `;
                            })
                            .join('')}
                    </div>
                `;
            } else {
                pages[5].content = this.markdownToHtml(timeline);
            }
        }

        // 5) Keynote -> page 6
        const keynote = sections['5']?.body;
        if (keynote) {
            const lines = keynote
                .split('\n')
                .map((l) => l.trim())
                .filter(Boolean);

            const speakers = lines
                .filter((l) => /^\d+\./.test(l))
                .map((l) => l.replace(/^\d+\.\s*/, ''));

            if (speakers.length) {
                pages[6].content = `
                    <div class="speakers-list">
                        ${speakers
                            .map((s) => {
                                const parts = s.split(':');
                                const name = (parts[0] || '').trim();
                                const aff = parts.slice(1).join(':').trim();
                                return `
                                    <div class="speaker-item">
                                        <div class="speaker-name">${name}</div>
                                        <div class="speaker-affiliation">${aff}</div>
                                    </div>
                                `;
                            })
                            .join('')}
                    </div>
                `;
            } else {
                pages[6].content = this.markdownToHtml(keynote);
            }
        }

        // 6) Ban tổ chức -> page 8
        const team = sections['6']?.body;
        if (team) {
            pages[8].content = this.markdownToHtml(team);
        }

        // 7) Chương trình hội nghị -> page 7
        const schedule = sections['7']?.body;
        if (schedule) {
            pages[7].content = this.markdownToHtml(schedule);
        }

        // 8) Đơn vị tổ chức -> page 9
        const org = sections['8']?.body;
        if (org) {
            pages[9].content = this.markdownToHtml(org);
        }

        // 9) Kế hoạch tài trợ -> pages 12-13
        const sponsor = sections['9']?.body;
        if (sponsor) {
            // Split roughly to keep 2 pages (Tier table on 12, the rest on 13)
            const marker = '### II.';
            const idx = sponsor.indexOf(marker);
            if (idx > 0) {
                const part1 = sponsor.slice(0, idx).trim();
                const part2 = sponsor.slice(idx).trim();
                pages[12].content = this.markdownToHtml(part1);
                pages[13].content = this.markdownToHtml(part2);
            } else {
                const html = this.markdownToHtml(sponsor);
                // Fallback split by length
                const parts = html.split(/\n\n+/);
                const mid = Math.ceil(parts.length / 2);
                pages[12].content = parts.slice(0, mid).join('\n');
                pages[13].content = parts.slice(mid).join('\n');
            }
        }

        // 10) Liên hệ & cảm ơn -> page 14
        const contact = sections['10']?.body;
        if (contact) {
            pages[14].content = this.markdownToHtml(contact);
        }

        // 11) Cộng đồng -> page 10
        const community = sections['11']?.body;
        if (community) {
            pages[10].content = this.markdownToHtml(community);
        }

        // 12) Lịch sử phát triển -> page 11
        const history = sections['12']?.body;
        if (history) {
            pages[11].content = this.markdownToHtml(history);
        }
    }

    getPageClass(page) {
        if (!page) return 'page';
        const type = typeof page.type === 'string' ? page.type : 'content';
        return `page page--${type}`;
    }

    renderPageInnerHTML(pageNum) {
        const page = this.pages[pageNum];
        if (!page) return '';

        if (page.type === 'cover') {
            return `
                <div class="cover-page">
                    <h1 class="cover-title">${page.title}</h1>
                    <h2 class="cover-subtitle">${page.subtitle}</h2>
                    <p class="cover-theme">${page.theme}</p>
                    <div class="cover-organizers">
                        <p><strong>Đơn vị tổ chức</strong></p>
                        ${page.organizers.map(org => `<p>${org}</p>`).join('')}
                    </div>
                    <div class="cover-cta">
                        <button class="btn btn-primary">${page.cta}</button>
                    </div>
                </div>
            `;
        }

        if (page.type === 'backcover') {
            return page.content;
        }

        return `
            <div class="page-header">
                <h1 class="page-title">${page.title}</h1>
            </div>
            <div class="page-content">
                ${page.content}
            </div>
        `;
    }

    generatePages() {
        return {
            1: {
                type: 'cover',
                title: 'HỒ SƠ MỜI TÀI TRỢ',
                subtitle: 'Hội Nghị Quốc Tế MEKONG TESOL Lần 5',
                theme: '"Beyond Language: Re-Empowering Learners through Skills, Emotions, and Connections"',
                organizers: ['Trung tâm Anh ngữ Gia Việt', 'Sở Giáo dục và Đào tạo Thành phố Cần Thơ'],
                cta: 'mekongtesol@gmail.com'
            },
            2: {
                type: 'content',
                title: 'Lời mời tài trợ',
                content: `
                    <p>Lời đầu tiên, Ban Tổ chức Hội nghị Quốc tế Mekong TESOL lần thứ 5 xin gửi đến Quý Cơ quan và Quý Đối tác lời chào trân trọng, cùng lời chúc sức khỏe, thành công và thịnh vượng.</p>
                    <p>Tiếp nối thành công đó, năm 2026, Trung tâm Ngoại ngữ Gia Việt phối hợp cùng Sở Giáo dục và Đào tạo Thành phố Cần Thơ sẽ tổ chức Hội nghị Quốc tế Mekong TESOL lần thứ 5, với chủ đề "Beyond Language: Re-Empowering Learners through Skills, Emotions, and Connections".</p>
                    <p>Hội nghị dự kiến thu hút trên khoảng 1000 đại biểu, gồm các chuyên gia quốc tế, nhà quản lý giáo dục, giảng viên, giáo viên tiếng Anh, doanh nghiệp và tổ chức giáo dục.</p>
                `
            },
            3: {
                type: 'content',
                title: 'Lời mời tài trợ (tiếp theo)',
                content: `
                    <p>Chương trình bao gồm 04 báo cáo chính (keynote talk), 05 phiên báo cáo tiêu biểu (featured talk), cùng hơn 40 phiên báo cáo song song với sự tham gia của các diễn giả đến từ Oxford, Cambridge, National Geographic, Pearson, M&M Publications và nhiều tổ chức giáo dục uy tín khác.</p>
                    <p>Đây sẽ là diễn đàn học thuật quy mô lớn, lan tỏa tinh thần đổi mới, tiếp thêm sức mạnh và kết nối bền vững cho cộng đồng giáo dục ngoại ngữ khu vực và quốc tế.</p>
                    <p>Với tầm vóc và ý nghĩa đặc biệt nêu trên, Ban Tổ chức trân trọng kính mời Quý Cơ quan và Quý Đối tác đồng hành cùng Hội nghị với vai trò Nhà tài trợ.</p>
                `
            },
            4: {
                type: 'info',
                title: 'Thông tin chung',
                content: `
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>Chủ đề:</strong><br>
                            "Beyond Language: Re-Empowering Learners through Skills, Emotions, and Connections"
                        </div>
                        <div class="info-item">
                            <strong>Ngày tổ chức:</strong><br>
                            Chủ Nhật, ngày 19/7/2026
                        </div>
                        <div class="info-item">
                            <strong>Số lượng người tham dự:</strong><br>
                            1000 (dự kiến)
                        </div>
                        <div class="info-item">
                            <strong>Địa điểm tổ chức:</strong><br>
                            Hội trường Cửu Long - Đại học Y Dược
                        </div>
                    </div>
                `
            },
            5: {
                type: 'timeline',
                title: 'Các mốc thời gian quan trọng',
                content: `
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-date">01/10/2025 – 01/02/2026</div>
                            <div class="timeline-event">Nộp bản tóm tắt bài báo cáo</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-date">15/03/2026</div>
                            <div class="timeline-event">Thông báo kết quả chấp nhận bài báo cáo</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-date">31/03/2026</div>
                            <div class="timeline-event">Diễn giả xác nhận báo cáo</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-date">02/04/2026 – 20/06/2026</div>
                            <div class="timeline-event">Mở cổng đăng ký tham dự hội thảo</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-date">19/7/2026</div>
                            <div class="timeline-event">Hội nghị chính (7:30 - 17:30)</div>
                        </div>
                    </div>
                `
            },
            6: {
                type: 'speakers',
                title: 'Các diễn giả chính',
                content: `
                    <div class="speakers-list">
                        <div class="speaker-item">
                            <img src="/images/keynote/rob-waring.jpg" alt="Rob Waring" class="speaker-photo">
                            <div class="speaker-info">
                                <div class="speaker-name">Giáo sư Rob Waring</div>
                                <div class="speaker-affiliation">Đại học Notre Dame Seishin Women's University, Japan</div>
                            </div>
                        </div>
                        <div class="speaker-item">
                            <img src="/images/keynote/ika-lestari-damayanti.png" alt="Ika Lestari Damayanti" class="speaker-photo">
                            <div class="speaker-info">
                                <div class="speaker-name">Giáo sư Ika Lestari Damayanti</div>
                                <div class="speaker-affiliation">Universitas Pendidikan Indonesia, Indonesia</div>
                            </div>
                        </div>
                        <div class="speaker-item">
                            <img src="/images/keynote/nguyen-thu-le-hang.jpg" alt="Phạm Thị Hồng Nhung" class="speaker-photo">
                            <div class="speaker-info">
                                <div class="speaker-name">Phó giáo sư - Tiến sĩ Phạm Thị Hồng Nhung</div>
                                <div class="speaker-affiliation">Hiệu trưởng ĐH Ngoại ngữ Huế</div>
                            </div>
                        </div>
                        <div class="speaker-item">
                            <img src="/images/keynote/erika-matrugIio.jpg" alt="Erika Matruglio" class="speaker-photo">
                            <div class="speaker-info">
                                <div class="speaker-name">Tiến sĩ Erika Matruglio</div>
                                <div class="speaker-affiliation">Trường Sư phạm | Khoa Khoa học Xã hội – Đại học Wollongong</div>
                            </div>
                        </div>
                    </div>
                `
            },
            7: {
                type: 'schedule',
                title: 'Chương trình hội nghị chính (dự kiến)',
                content: `
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Thời gian</th>
                                <th>Sự kiện</th>
                                <th>Chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>07:30 – 08:00</td>
                                <td>Đón khách</td>
                                <td>Check-in, nhận bảng tên & túi Hội nghị</td>
                            </tr>
                            <tr>
                                <td>08:00 – 08:30</td>
                                <td>Khai mạc</td>
                                <td>Phát biểu của đơn vị tổ chức</td>
                            </tr>
                            <tr>
                                <td>08:30 – 09:10</td>
                                <td>Báo cáo chính 01</td>
                                <td>40 phút</td>
                            </tr>
                            <tr>
                                <td>09:15 – 09:45</td>
                                <td>Phiên song song 01</td>
                                <td>08 phòng song song</td>
                            </tr>
                            <tr>
                                <td>09:50 – 10:20</td>
                                <td>Phiên song song 02</td>
                                <td>08 phòng song song</td>
                            </tr>
                            <tr>
                                <td>10:20 – 10:40</td>
                                <td>Tea Break sáng</td>
                                <td>Tiệc trà & giao lưu</td>
                            </tr>
                            <tr>
                                <td>10:40 – 11:20</td>
                                <td>Báo cáo chính 02</td>
                                <td>40 phút</td>
                            </tr>
                            <tr>
                                <td>11:25 – 11:55</td>
                                <td>Phiên song song 03</td>
                                <td>08 phòng song song</td>
                            </tr>
                            <tr>
                                <td>12:00 – 13:30</td>
                                <td>Lunch Break + Poster</td>
                                <td>Ăn trưa, kết nối, tham quan Poster</td>
                            </tr>
                            <tr>
                                <td>13:30 – 14:10</td>
                                <td>Báo cáo chính 03</td>
                                <td>40 phút</td>
                            </tr>
                            <tr>
                                <td>14:15 – 14:45</td>
                                <td>Phiên song song 04</td>
                                <td>08 phòng song song</td>
                            </tr>
                            <tr>
                                <td>14:50 – 15:20</td>
                                <td>Phiên song song 05</td>
                                <td>08 phòng song song</td>
                            </tr>
                            <tr>
                                <td>15:20 – 15:40</td>
                                <td>Tea Break chiều</td>
                                <td>Tiệc trà & networking</td>
                            </tr>
                            <tr>
                                <td>15:40 – 16:20</td>
                                <td>Báo cáo chính 04</td>
                                <td>40 phút</td>
                            </tr>
                            <tr>
                                <td>16:20 – 16:40</td>
                                <td>Bế mạc</td>
                                <td>Phát biểu bế mạc, rút thăm may mắn</td>
                            </tr>
                        </tbody>
                    </table>
                `
            },
            8: {
                type: 'team',
                title: 'Thành viên Ban tổ chức',
                content: `
                    <div class="team-list">
                        <div class="team-member">
                            <div class="member-role">Chỉ đạo chung</div>
                            <div class="member-name">Tiến sĩ Nguyễn Phúc Tăng</div>
                            <div class="member-title">Phó Giám đốc – Sở Giáo dục và Đào tạo, Tp. Cần Thơ</div>
                        </div>
                        <div class="team-member">
                            <div class="member-role">Trưởng Ban tổ chức Hội nghị</div>
                            <div class="member-name">Tiến sĩ Nguyễn Hải Quân</div>
                            <div class="member-title">Trung tâm Ngoại ngữ Gia Việt</div>
                        </div>
                        <div class="team-member">
                            <div class="member-role">Điều phối tổng thể Hội nghị</div>
                            <div class="member-name">Thạc sĩ Huỳnh Minh Thư</div>
                            <div class="member-title">Trung tâm Ngoại ngữ Gia Việt</div>
                        </div>
                        <div class="team-member">
                            <div class="member-role">Điều phối hậu cần – đối ngoại</div>
                            <div class="member-name">Dương Hồ Bảo Ngân</div>
                            <div class="member-title">Trung tâm Ngoại ngữ Gia Việt</div>
                        </div>
                        <div class="team-member">
                            <div class="member-role">Điều phối thiết kế – truyền thông</div>
                            <div class="member-name">Võ Lê Uyển Nhi</div>
                            <div class="member-title">Trung tâm Ngoại ngữ Gia Việt</div>
                        </div>
                    </div>
                `
            },
            9: {
                type: 'organization',
                title: 'Giới thiệu đơn vị tổ chức',
                content: `
                    <div class="organization-section">
                        <h3>Sở Giáo dục và Đào tạo thành phố Cần Thơ</h3>
                        <p><strong>Đơn vị chỉ đạo và định hướng</strong></p>
                        <p>Sở Giáo dục và Đào tạo thành phố Cần Thơ đóng góp chủ đạo trong việc định hướng, thẩm định và phê duyệt kế hoạch tổ chức, nhằm đảm bảo các hoạt động của Hội nghị diễn ra suôn sẻ, đúng quy định và đạt hiệu quả cao.</p>
                        <p>Sở đồng thời chỉ đạo, truyền tải thông tin đến các trường trực thuộc, khuyến khích giáo viên tham gia, tạo điều kiện để hội nghị có sự tham dự rộng rãi từ đội ngũ giáo viên trong khu vực.</p>
                    </div>

                    <div class="organization-section">
                        <h3>Trung tâm Anh ngữ Gia Việt</h3>
                        <p><strong>Đơn vị phụ trách chuyên môn và tổ chức</strong></p>
                        <p>Trung tâm Ngoại ngữ Gia Việt đóng vai trò là đơn vị chịu trách nhiệm tổ chức chính của Hội nghị. Được thành lập từ năm 2009 và đã khẳng định được uy tín trong việc đào tạo tiếng Anh cho học sinh, sinh viên và phụ huynh tại Đồng bằng Sông Cửu Long.</p>
                        <p>Với hơn 4.000 học viên thường xuyên theo học và hơn 150 giáo viên, Gia Việt là một trong những đơn vị đào tạo tiếng Anh hàng đầu trong khu vực.</p>
                        <p>Hội nghị MEKONG TESOL đã được Trung tâm Ngoại ngữ Gia Việt khởi xướng từ năm 2016 và được tổ chức thường xuyên với tần suất 2 năm 1 lần qua các năm.</p>
                    </div>
                `
            },
            10: {
                type: 'community',
                title: 'Cộng đồng Mekong TESOL',
                content: `
                    <div class="community-stats">
                        <h3>Đối tượng tham dự</h3>
                        <ul>
                            <li>Giảng viên và Giáo viên tiếng Anh</li>
                            <li>Nhà nghiên cứu và Học giả</li>
                            <li>Sinh viên chuyên ngành Ngôn ngữ Anh, Sư phạm tiếng Anh</li>
                            <li>Lãnh đạo và Quản lý giáo dục</li>
                            <li>Chuyên viên phát triển chương trình</li>
                            <li>Nhà cung cấp giải pháp giáo dục</li>
                        </ul>
                        
                        <h3>Điểm nhấn nổi bật</h3>
                        <table class="table striped">
                            <tr>
                                <td><strong>Lượt tham gia</strong></td>
                                <td><strong>2.500+</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Bài trình bày & Workshop</strong></td>
                                <td><strong>120+</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Quốc gia kết nối</strong></td>
                                <td><strong>13+</strong></td>
                            </tr>
                        </table>
                    </div>
                `
            },
            11: {
                type: 'history',
                title: 'Lịch sử hình thành và phát triển',
                content: `
                    <div class="history-section">
                        <p>Được thành lập vào năm 2016, Hội nghị Quốc tế Mekong TESOL đã phát triển thành một trong những diễn đàn học thuật uy tín nhất tại Đồng bằng Sông Cửu Long, kết nối các nhà nghiên cứu, chuyên gia, giảng viên và giáo viên tiếng Anh từ Việt Nam và khắp nơi trên thế giới để trao đổi ý tưởng và chia sẻ những đổi mới trong giảng dạy tiếng Anh.</p>
                        <p>Qua bốn kỳ tổ chức thành công, Mekong TESOL liên tục mở rộng về quy mô, chất lượng và tầm ảnh hưởng — đóng góp đáng kể vào việc nâng cao năng lực giảng dạy tiếng Anh và thúc đẩy hội nhập giáo dục quốc tế tại khu vực Mekong và trên toàn Việt Nam.</p>

                        <h3>Mekong TESOL lần 1 — 2016</h3>
                        <p><strong>Chủ đề:</strong> "TAILORING ENGLISH TEACHING TO REGIONAL NEEDS"</p>
                        <ul>
                            <li><strong>Quy mô:</strong> Hơn 350 người tham dự</li>
                            <li><strong>Chương trình:</strong> 04 phiên toàn thể, 33 bài trình bày song song</li>
                            <li><strong>Nhà tài trợ:</strong> Bangkok University, Cambridge Assessment English, CDIMEX, Cengage Learning, Oxford University Press, FAHASA, National Geographic Learning</li>
                        </ul>
                        
                        <h3>Mekong TESOL lần 2 — 2018</h3>
                        <p><strong>Chủ đề:</strong> "THINK GLOBALLY, ACT LOCALLY"</p>
                        <ul>
                            <li><strong>Quy mô:</strong> 500 người tham dự</li>
                            <li><strong>Chương trình:</strong> 04 phiên toàn thể, 30 bài trình bày song song</li>
                            <li><strong>Nhà tài trợ:</strong> IDP IELTS, National Geographic Learning</li>
                        </ul>

                        <h3>Mekong TESOL lần 3 — 2021 (Trực tuyến)</h3>
                        <p><strong>Chủ đề:</strong> "CONTEXTUALISING AND INNOVATING LANGUAGE LEARNING AND TEACHING"</p>
                        <ul>
                            <li><strong>Quy mô:</strong> 863 lượt tham dự</li>
                            <li><strong>Chương trình:</strong> 14 webinar với 15 diễn giả</li>
                        </ul>
                        
                        <h3>Mekong TESOL lần 4 — 2023</h3>
                        <p><strong>Chủ đề:</strong> "RE-ORIENTATION IN ELT: EMBRACING CHANGES AND FUTURE POSSIBILITIES"</p>
                        <ul>
                            <li><strong>Quy mô:</strong> 800 người tham dự</li>
                            <li><strong>Chương trình:</strong> 04 phiên toàn thể, 30 bài trình bày song song</li>
                            <li><strong>Nhà tài trợ:</strong> IEC Group, Regional English Language Office, National Geographic Learning, CDIMEX, MM Publications, Oxford University Press, Cambridge University Press, FAHASA, Du Học VISA, Macmillan Education, Đại học Y Dược Cần Thơ</li>
                        </ul>
                    </div>
                `
            },
            12: {
                type: 'sponsorship',
                title: 'Kế hoạch tài trợ (1/2)',
                content: `
                    <h3>Các gói tài trợ theo cấp độ</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Quyền lợi</th>
                                <th>Vàng</th>
                                <th>Bạc</th>
                                <th>Đồng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Giá trị tài trợ</td>
                                <td>30.000.000 VNĐ</td>
                                <td>25.000.000 VNĐ</td>
                                <td>20.000.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>Số lượng</td>
                                <td>03 đơn vị</td>
                                <td>03 đơn vị</td>
                                <td>04 đơn vị</td>
                            </tr>
                            <tr>
                                <td>Logo trên ấn phẩm</td>
                                <td>✓ Vị trí trung tâm</td>
                                <td>✓ Hàng thứ hai</td>
                                <td>✓ Hàng thứ ba</td>
                            </tr>
                            <tr>
                                <td>Video clip quảng bá</td>
                                <td>03 phút</td>
                                <td>02 phút</td>
                                <td>01 phút</td>
                            </tr>
                            <tr>
                                <td>Quầy giới thiệu</td>
                                <td>03 bàn</td>
                                <td>02 bàn</td>
                                <td>01 bàn</td>
                            </tr>
                        </tbody>
                    </table>
                `
            },
            13: {
                type: 'sponsorship',
                title: 'Kế hoạch tài trợ (2/2)',
                content: `
                    <h3>Gói tài trợ Đồng hành</h3>
                    <table class="table">
                        <tr>
                            <td><strong>Giá trị tài trợ</strong></td>
                            <td>8.000.000 VNĐ</td>
                        </tr>
                        <tr>
                            <td><strong>Số lượng</strong></td>
                            <td>Linh hoạt</td>
                        </tr>
                        <tr>
                            <td><strong>Quầy giới thiệu</strong></td>
                            <td>✓ 01 bàn</td>
                        </tr>
                        <tr>
                            <td><strong>Logo trên website</strong></td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td><strong>Tham dự Gala Dinner</strong></td>
                            <td>✗</td>
                        </tr>
                    </table>
                    
                    <h3>Tài trợ học thuật</h3>
                    <ul>
                        <li>Tài trợ diễn giả cho phiên báo cáo song song</li>
                        <li>Tài trợ giải thưởng học thuật (Best Presentation)</li>
                        <li>Tài trợ học liệu, sách, tài khoản học tập</li>
                    </ul>
                    
                    <h3>Hình thức đóng góp</h3>
                    <ul>
                        <li>☑ 100% hiện kim</li>
                        <li>☑ 80% hiện kim + 20% hiện vật</li>
                        <li>☑ 50% hiện kim + 50% hiện vật</li>
                    </ul>
                `
            },
            14: {
                type: 'contact',
                title: 'Liên hệ & Lời cảm ơn',
                content: `
                    <div class="contact-section">
                        <p>Thay mặt Ban Tổ chức Hội nghị, chúng tôi xin trân trọng gửi lời cảm ơn sâu sắc đến Quý Cơ quan và Quý Đối tác đã dành thời gian quan tâm và xem xét Hồ sơ mời tài trợ Hội nghị Quốc tế Mekong TESOL lần thứ 5 – năm 2026.</p>
                        
                        <h3>Thông tin liên hệ</h3>
                        <div class="contact-info">
                            <p><strong>Email:</strong> mekongtesol@gmail.com</p>
                            <p><strong>TS. Nguyễn Hải Quân – Trưởng Ban Tổ chức Hội nghị</strong><br>
                            📞 +84 939 988 747</p>
                            <p><strong>ThS. Huỳnh Minh Thư – Điều phối viên Hội nghị</strong><br>
                            📞 +84 939 808 769</p>
                        </div>
                        
                        <p>Ban Tổ chức xin phép sẽ chủ động liên hệ với Quý Cơ quan và Quý Đối tác sau 14 ngày kể từ ngày gửi Hồ sơ mời tài trợ.</p>
                        
                        <p>Chúng tôi rất mong nhận được sự quan tâm, hợp tác và hỗ trợ quý báu từ Quý vị với tư cách Nhà tài trợ của Hội nghị Quốc tế Mekong TESOL lần thứ 5 – 2026.</p>
                        
                        <p><strong>Kính chúc Quý Cơ quan và Quý Đối tác sức khỏe dồi dào, thành công bền vững và phát triển thịnh vượng.</strong></p>
                        
                        <p><strong>Trân trọng cảm ơn!</strong></p>
                    </div>
                `
            },
            15: {
                type: 'backcover',
                title: '',
                content: `
                    <div class="back-cover">
                        <h3>HỘI NGHỊ QUỐC TẾ MEKONG TESOL LẦN 5</h3>
                        <p>"Beyond Language: Re-Empowering Learners through Skills, Emotions, and Connections"</p>
                        <p>Chủ Nhật, ngày 19/7/2026</p>
                        <p>Hội trường Cửu Long - Đại học Y Dược Cần Thơ</p>
                        <br><br>
                        <p><strong>mekongtesol@gmail.com</strong></p>
                        <p>+84 939 988 747 | +84 939 808 769</p>
                    </div>
                `
            }
        };
    }

    loadPage(pageNum) {
        const page = this.pages[pageNum];
        if (!page) return;

        const pageContent = document.getElementById('page-content');

        pageContent.className = this.getPageClass(page);

        pageContent.innerHTML = this.renderPageInnerHTML(pageNum);
    }

    bindEvents() {
        // Navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => this.prevPage());
        document.getElementById('next-btn').addEventListener('click', () => this.nextPage());

        // Print / Export PDF
        document.getElementById('print-btn').addEventListener('click', () => this.exportPDF());
        
        // TOC toggle
        document.getElementById('toc-toggle').addEventListener('click', () => this.toggleTOC());
        document.getElementById('toc-close').addEventListener('click', () => this.closeTOC());
        
        // TOC navigation
        document.querySelectorAll('.toc-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const pageNum = parseInt(item.dataset.page);
                this.goToPage(pageNum);
                this.closeTOC();
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevPage();
            if (e.key === 'ArrowRight') this.nextPage();
            if (e.key === 'Escape') this.closeTOC();
        });
        
        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextPage(); // Swipe left - next page
            } else {
                this.prevPage(); // Swipe right - previous page
            }
        }
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.goToPage(this.currentPage - 1);
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.goToPage(this.currentPage + 1);
        }
    }

    goToPage(pageNum) {
        if (pageNum < 1 || pageNum > this.totalPages) return;
        
        this.currentPage = pageNum;
        this.loadPage(pageNum);
        this.updateUI();
        this.updateTOC();
    }

    updateUI() {
        // Update page indicator
        document.getElementById('current-page').textContent = this.currentPage;
        document.getElementById('total-pages').textContent = this.totalPages;
        
        // Update progress bar
        const progress = (this.currentPage / this.totalPages) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        
        // Update button states
        document.getElementById('prev-btn').disabled = this.currentPage === 1;
        document.getElementById('next-btn').disabled = this.currentPage === this.totalPages;
    }

    updateTOC() {
        const pageToActive = {
            1: 1,
            2: 2,
            3: 2,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            11: 11,
            12: 12,
            13: 12,
            14: 14,
            15: 15
        };

        const activePage = pageToActive[this.currentPage] ?? this.currentPage;

        document.querySelectorAll('.toc-item').forEach(item => {
            item.classList.remove('active');
            if (parseInt(item.dataset.page) === activePage) {
                item.classList.add('active');
            }
        });
    }

    toggleTOC() {
        document.getElementById('toc-sidebar').classList.toggle('open');
    }

    closeTOC() {
        document.getElementById('toc-sidebar').classList.remove('open');
    }

    buildPrintPages() {
        const printRoot = document.getElementById('print-root');
        if (!printRoot) return;

        printRoot.innerHTML = '';
        for (let i = 1; i <= this.totalPages; i++) {
            const page = this.pages[i];
            if (!page) continue;

            const printPage = document.createElement('div');
            printPage.className = 'print-page';

            const inner = document.createElement('div');
            inner.className = this.getPageClass(page);
            inner.innerHTML = this.renderPageInnerHTML(i);

            printPage.appendChild(inner);
            printRoot.appendChild(printPage);
        }
    }

    exportPDF() {
        this.buildPrintPages();

        const afterPrint = () => {
            const printRoot = document.getElementById('print-root');
            if (printRoot) printRoot.innerHTML = '';
            window.removeEventListener('afterprint', afterPrint);
        };

        window.addEventListener('afterprint', afterPrint);
        window.print();
    }
}

// Initialize flipbook when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Flipbook();
});

// Add page-specific styles dynamically
const pageStyles = `
    .info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin: 2rem 0;
    }
    
    .info-item {
        padding: 1rem;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
    }
    
    .timeline {
        margin: 2rem 0;
    }
    
    .timeline-item {
        display: flex;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .timeline-date {
        min-width: 200px;
        font-weight: 600;
        color: #333;
    }
    
    .timeline-event {
        flex: 1;
    }
    
    .speakers-list, .team-list {
        margin: 2rem 0;
    }
    
    .speaker-item, .team-member {
        margin-bottom: 1.5rem;
        padding: 1rem;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
    }
    
    .speaker-name, .member-name {
        font-weight: 600;
        font-size: 1.125rem;
        margin-bottom: 0.25rem;
    }
    
    .speaker-affiliation, .member-title {
        color: #666;
        font-size: 0.875rem;
    }
    
    .member-role {
        font-weight: 600;
        color: #333;
        margin-bottom: 0.5rem;
    }
    
    .organization-section, .community-stats, .history-section, .contact-section {
        margin: 2rem 0;
    }
    
    .organization-section h3, .community-stats h3, .history-section h3, .contact-section h3 {
        margin: 1.5rem 0 1rem;
        font-size: 1.25rem;
        font-weight: 600;
    }
    
    .contact-info {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        margin: 1rem 0;
    }
    
    .back-cover {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
        padding: 2rem;
    }
    
    .back-cover h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    
    .back-cover p {
        margin-bottom: 0.5rem;
    }
    
    @media (max-width: 768px) {
        .info-grid {
            grid-template-columns: 1fr;
        }
        
        .timeline-item {
            flex-direction: column;
        }
        
        .timeline-date {
            min-width: auto;
            margin-bottom: 0.5rem;
        }
    }
`;

// Inject page-specific styles
const styleSheet = document.createElement('style');
styleSheet.textContent = pageStyles;
document.head.appendChild(styleSheet);
