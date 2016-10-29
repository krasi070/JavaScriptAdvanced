function sortedList() {
    let list = [];
    let sortedList = {
        size: 0,
        add: function (element) {
            list.push(element);
            sortedList.size = list.length;
            sortList();
        },
        remove: function (index) {
            if (index >= 0 && index < list.length) {
                list = list.filter((e, i) => i != index);
                sortedList.size = list.length;
            }
        },
        get: function (index) {
            if (index >= 0 && index < list.length) {
                return list[index];
            }
        }
    };

    function sortList() {
        list = list.sort((a, b) => a - b);
    }

    return sortedList;
}