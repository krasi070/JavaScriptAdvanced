class MailBox {
    constructor() {
        this.mailMessages = [];
    }

    get messageCount() {
        return this.mailMessages.length;
    }

    addMessage(subject, text) {
        this.mailMessages.push({
            subject: subject,
            text: text
        });

        return this;
    }

    deleteAllMessages() {
        this.mailMessages = [];
    }

    findBySubject(substr) {
        return this.mailMessages.filter(m => m.subject.indexOf(substr) > -1);
    }

    toString() {
        let result = '';
        if (this.mailMessages.length == 0) {
            result = ' * (empty mailbox)';
        } else {
            for (let message of this.mailMessages) {
                result += ` * [${message.subject}] ${message.text}\n`;
            }
        }

        return result.trim();
    }
}