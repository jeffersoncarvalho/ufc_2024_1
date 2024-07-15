var express = require('express');
var router = express.Router();

const professorService = require("../services/professor.service");

router.get(
    "/listar"
    ,
    (req,res,next)=>{
        res.json(professorService.list())
    }
)

router.post(
    "/cadastrar"
    ,
    (req,res,next)=>{
        //res.json(professorService.list())
        const professor = professorService.register(req.body)
        res.json(professor)
    }
)

router.get(
    "/recuperar/:id"
    ,
    (req,res,next)=>{
        //res.json(professorService.list())
        const professor = professorService.retrieve(req.params.id)
        res.json(professor)
    }
)

router.put(
    "/atualizar/:id"
    ,
    (req,res,next)=>{
        //res.json(professorService.list())
        const professor = professorService.update(req.params.id,req.body)
        res.json(professor)
    }
)

router.delete(
    "/remover/:id"
    ,
    (req,res,next)=>{
        //res.json(professorService.list())
        const out = professorService.delete(req.params.id)
        res.json({"sucesso":out})
    }
)

module.exports = router