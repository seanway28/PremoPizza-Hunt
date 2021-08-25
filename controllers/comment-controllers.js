const { Comment, Pizza } = require('../models');

const commentController = {
    // Add comment to pizza
    addComment({ params, body }, res) {
        console.log(body);
        Comment.create(body)
            .then(({_id }) => {
                return Pizza.findOneAndUpdate(
                    { _id: params.pizzaId },
                    { $push: { comments: _id } },
                    { new: true }
                );
            })
            .then(dbPizzaData => {
                if (!dbPizzaData) {
                    res.status(404).json({ message: 'No pizza found with this Id'});
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => res.json(err));
        },
        // addReply
        addReply({ params, bodu }, res) {
            Comment.findOneAndUpdate(
                { _id: params.commentId },
                { $push: { replies: nody } },
                { new: true, runValidators: true }

            )
            .then(dbPizzaData => {
                if (!dbPizzaData) {
                    res.status(404).json({ message: 'No pizza found with this Id'});
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err)

      



