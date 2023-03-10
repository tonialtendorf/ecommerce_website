const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [ProductTag],
  })
  .then((tags) => res.json(tags))
  .catch((err) => res.status(400).json(err));     
  });

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    include: [ProductTag],
    where: {
      id: req.params.id,
    }
  })
  .then((tag) => res.json(tag))
  .catch((err) => res.status(400).json(err));
  
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    category_name: req.body.tag_name
  })
  .then(tag => res.json(tag))
  .catch(err => res.status(400).json(err));
});


router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    where: {
      id: req.params.id,
    }
  })
  .then(tag => res.json(tag))
  .catch(err => res.status(400).json(err));

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(tag => res.json(tag))
  .catch(err => res.status(400).json)
});

module.exports = router;
