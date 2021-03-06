import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import express from 'express';

export const routes = express.Router()

routes.post("/feedbacks", async (req, res) => {
    
    const { type, comment, screenshot} = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submiteFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter) 
  
    await submiteFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

  
    return res.status(201).send()
  });