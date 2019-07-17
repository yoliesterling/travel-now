const router = require('express').Router();
let Trip = require('../../models/trip');

router.route('/').get((req, res) => {
  Trip.find()
    .then(trips => res.json(trips))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const tripname = req.body.tripname;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newTrip = new Trip({
    tripname,
    description,
    date,
  });

  newTrip.save()
  .then(() => res.json('New Trip added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Trip.findById(req.params.id)
    .then(trip => res.json(trip))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Trip.findByIdAndDelete(req.params.id)
    .then(() => res.json('Trip deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Trip.findById(req.params.id)
    .then(trip => {
      trip.tripname = req.body.tripname;
      trip.description = req.body.description;
      trip.date = Date.parse(req.body.date);

      trip.save()
        .then(() => res.json('Trip updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;