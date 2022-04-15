const Course = require('../model/Course.model')
const { mongoseToObject, mutipleMongoseToObject } = require('../../util/mongooses')

class CoursesControllers {
    // card(req, res, next) {
    //     Course.find({})
    //         .then(courses => {
    //             res.render('card', {
    //                 courses: mutipleMongoseToObject(courses)
    //             })
    //         })
    //         .catch(next)
    // }

    // content(req, res, next) {
    //     Course.findOne({slug: req.params.slug})
    //         .then(course => res.render('content',
    //             {
    //                 course: mongoseToObject(course)
    //             }))
    //         .catch(next)
    //     // res.send('paramsmeter - ' + req.params.name);
    // }

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(courses => {
                res.render('../../resources/views/courses/show', {
                    courses: mongoseToObject(courses)
                })
                // res.json(course);
                // console.log('query ' + req.params.slug)
                // console.log('query ' + course.name)
            })
            .catch(next)
    }

    // card(req, res, next) {
    //     Course.find({})
    //         .then(courses => {
    //             res.render('../../resources/views/courses/card', {
    //                 courses: mutipleMongoseToObject(courses)
    //             })
    //         })
    //         .catch(next)
    // }

    create(req, res, next) {
        // res.send('html-css')
        res.render('../../resources/views/courses/create')

    }

    story(req, res, next) {
        const formData = req.body;
        formData.image = `${req.body.image}`;
        const course = new Course(formData);

        course.save()
            .then(() => res.redirect(`/`))
            .catch(error => {

            })
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(courses => {
                res.render('../../resources/views/courses/edit', {
                    courses: mongoseToObject(courses)
                })
            })
            .catch(next)

    }

    // [PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/'))
            .catch(next)

    }

    // [PUT] /course/:id
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/'))
            .catch(next)

    }
}

module.exports = new CoursesControllers;