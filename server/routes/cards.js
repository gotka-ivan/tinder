const { Router } = require("express")
const router = Router(),
cards = require('../config/cards'),
chunkLimit = 7;

router.get('/:id',(req,res)=> {
    const startChunkIndex = getStartChunkIndex(req);
    const endChunkIndex = startChunkIndex + chunkLimit;
    console.log(startChunkIndex,endChunkIndex)
    const data = cards.slice(startChunkIndex,endChunkIndex)
    data.length ? res.json(data) : res.sendStatus(500)
})

function getStartChunkIndex(req) {
    const startChunkIndex = Number(req.params.id)
    return startChunkIndex === 0 ?  startChunkIndex * chunkLimit : startChunkIndex * (chunkLimit + 1)
}

module.exports = router
