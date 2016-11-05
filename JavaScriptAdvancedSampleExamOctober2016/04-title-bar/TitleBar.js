class TitleBar {
    constructor(title) {
        this.title = title;
        this.links = [];
    }

    addLink(href, name) {
        let newLink = {
            href: href,
            name: name
        };

        this.links.push(newLink);
    }

    appendTo(selector) {
        let menu = $('<nav class="menu">');
        for (let link of this.links) {
            menu.append($(`<a class="menu-link" href="${link.href}">`).text(link.name));
        }

        let button = $('<a class="button">&#9776;</a>');
        $($(selector).toArray()[0])
            .append($('<header class="header">')
                .append($('<div class="header-row">')
                    .append($(button))
                    .append($('<span class="title">').text(this.title)))
                .append($('<div class="drawer" style="display: none">')
                    .append($(menu))));

        button.on('click', this.showMenuItems);
    }

    showMenuItems() {
        let drawer = $($('.drawer').toArray()[0]);
        if ($(drawer).attr('display')) {
            $(drawer).css('display', 'none');
            $(drawer).removeAttr('display');
        } else {
            $(drawer).css('display', 'block');
            $(drawer).attr('display', 'true');
        }
    }
}