var express = require('express');
var router = express.Router();

const ProfessorService = require("../services/ProfessorService");

router.get(
    "/listar",
    (request, response, next) => {
        response.json(ProfessorService.listar())
    }
)

router.post(
    "/criar",
    (request, response, next) => {
        const novoProfessor = ProfessorService.criar(request.body)
        response.json(novoProfessor)
    }
)

module.exports = router