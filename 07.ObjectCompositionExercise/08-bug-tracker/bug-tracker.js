function bugTracker() {
    return (function () {
        let id = 0;
        let bugs = [];
        let selector = '';
        return {
            report: function (author, description, reproducible, severity) {
                removeBugs();
                let newBug = {
                    ID: id,
                    author: author,
                    description: description,
                    reproducible: reproducible,
                    severity: severity,
                    status: 'Open'
                };

                id++;
                bugs.push(newBug);
                printBugs();
            },
            setStatus: function (id, newStatus) {
                bugs.filter(b => b.ID == id)[0].status = newStatus;
                removeBugs();
                printBugs();
            },
            remove: function (id) {
                removeBugs();
                bugs = bugs.filter(b => b.ID != id);
                printBugs();
            },
            sort: function (method) {
                removeBugs();
                if (method == 'author') {
                    bugs = bugs.sort((a, b) => a.author.localeCompare(b.author));
                } else if (method == 'severity') {
                    bugs = bugs.sort((a, b) => a.severity - b.severity);
                } else {
                    bugs = bugs.sort((a, b) => a.ID - b.ID);
                }

                printBugs();
            },
            output: function (select) {
                selector = select;
            }
        };

        function printBugs() {
            for (let i = 0; i < bugs.length; i++) {
                $(selector)
                    .append($('<div id="report_' + bugs[i].ID + '" class="report">')
                        .append($('<div class="body">')
                            .append($('<p>').text(bugs[i].description)))
                        .append($('<div class="title">')
                            .append($('<span class="author">').text(`Submitted by: ${bugs[i].author}`))
                            .append($('<span class="status">').text(`${bugs[i].status} | ${bugs[i].severity}`))));
            }
        }

        function removeBugs() {
            for (let i = 0; i < bugs.length; i++) {
                $(`#report_${bugs[i].ID}`).remove();
            }
        }
    })();
}