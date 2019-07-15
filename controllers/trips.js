const Trip = require('../models/trip');

module.exports = {
    index,
    show,
    new: newTrip,
    create,
    edit,
    update,
    delete: deleteTrip
};

function index(req, res) {
    Trip.find({}, (err, trips) => {
        res.render('dashboard/index', {
            user: req.user,
            trips
        });
    });
}

function show(req, res) {
    Trip.findById(req.params.id, (err, trip) => {
        res.render('dashboard/show', {
            user: req.user,
            trip
        });
    });
}

function newTrip(req, res) {
    res.render('create/new', {
        user: req.user
    });
}

function create(req, res) {
    req.user = req.params.id;
    Trip.create(req.body, (err, trip) => {
        res.redirect(`/dashboard/${trip._id}`)
    });
}

function edit(req, res) {
    Trip.findById(req.params.id, (err, trip) => {
        res.render('edit/edit', {
            user: req.user,
            trip
        });
    });
}

function update(req, res) {
    Trip.findById(req.params.id, (err, trip) => {
        trip.tripName = req.body.tripName
        trip.startDate = req.body.startDate
        trip.endDate = req.body.endDate
        trip.locationOne = req.body.locationOne
        trip.locationTwo = req.body.locationTwo
        trip.locationThree = req.body.locationThree
        trip.save(err => {
            res.redirect(`/dashboard/${trip._id}`)
        });
    });
}

function deleteTrip(req, res) {
    Trip.findByIdAndDelete(req.params.id, err => {
        res.redirect('/dashboard')
    });
}

