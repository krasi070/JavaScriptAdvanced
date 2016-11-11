class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    get firstTopic() {
        return this.topics[0];
    }

    get lastTopic() {
        return this.topics[this.topics.length - 1];
    }

    addTopic(title, date) {
        this.topics.push({
            title: title,
            date: date
        });

        this._sortTopics();

        return this;
    }

    toString() {
        let str = `Course "${this.title}" by ${this.trainer}\n`;
        if (this.topics.length > 0) {
            for (let topic of this.topics) {
                str += ` * ${topic.title} - ${topic.date}\n`;
            }

            str = str.trim();
        }

        return str;
    }

    _sortTopics() {
        this.topics = this.topics.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
    }
}