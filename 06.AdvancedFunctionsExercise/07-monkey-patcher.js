function monkeyPatcher(line) {
    if (line == 'upvote') {
        this.upvotes++;
    } else if (line == 'downvote') {
        this.downvotes++;
    } else if (line == 'score') {
        let score = this.upvotes - this.downvotes;
        let upVotesShow = this.upvotes;
        let downVotesShow = this.downvotes;
        let totalVotes = this.upvotes + this.downvotes;
        if (totalVotes > 50) {
            let addedVotes = upVotesShow > downVotesShow ?
                Math.ceil(upVotesShow / 4) :
                Math.ceil(downVotesShow / 4);
            upVotesShow += addedVotes;
            downVotesShow += addedVotes;
        }

        let upVotePercentage = this.upvotes / totalVotes;
        let rating = 'new';
        if (totalVotes >= 10) {
            if (upVotePercentage > 0.66) {
                rating = 'hot';
            } else if (score < 0) {
                rating = 'unpopular';
            } else if ((this.upvotes > 100 || this.downvotes > 100) && score >= 0) {
                rating = 'controversial';
            }
        }

        return [
            upVotesShow,
            downVotesShow,
            score,
            rating
        ];
    }
}