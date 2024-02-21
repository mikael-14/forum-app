import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const sut = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await sut.execute({
    questionId: '1',
    instructorId: '1',
    content: 'new answer',
  })

  expect(answer.content).toEqual('new answer')
})
