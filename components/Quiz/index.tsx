'use client'
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Nav from "../common/Nav";
import CheckBox from "./CheckBox";
import { Question, Answer } from "@/utils/interface";
import React from "react";
import { combineArr } from "@/utils/commonMethods";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Quiz = ({ questions }: { questions: Question[] }) => {
    const router = useRouter();
    let email = getCookie('email');
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [value, setValue] = useState('');
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [time, setTime] = useState<number>(60 * 30);

    useEffect(() => {
        const timer = time > 0 ? setInterval(() => {
            setTime(state => state - 1)
        }, 1000) : undefined;

        if (time === 0) {
            clearInterval(timer);
            setCookie('answers', JSON.stringify(answers));
            router.push('/result');
        }

        return () => clearInterval(timer);
    }, [time])

    const handleChange = (value: string) => {
        setValue(value);
    }

    const handleNext = (question: Question) => {
        if (value) {
            setAnswers(state => ([...state, {
                question: question.question,
                correct_answer: question.correct_answer,
                your_answer: value
            }]))
            setCurrentIndex(state => state + 1);
            setValue('')
        }
    }

    const handleSubmit = (question: Question) => {
        if (value) {
            setCookie('answers', JSON.stringify([...answers, {
                question: question.question,
                correct_answer: question.correct_answer,
                your_answer: value
            }]))
            router.push('/result')
        }
    }

    return <div>
        <Nav
            email={email}
            isTiming={true}
            time={time}
        />

        <div className="flex flex-col items-center gap-4 px-4">

            {
                questions && questions?.map((question, index) => index === currentIndex && (
                    <React.Fragment key={index}>
                        <div className="mt-8 text-pink-900 font-bold">CATEGORY: {question.category}</div>
                        <div className="text-center">
                            <span className="text-sm">{index + 1}/{questions.length}</span>
                            <div className="font-bold text-lg">{question.question}</div>
                        </div>

                        <div className="max-w-2xl w-full flex flex-col gap-2 mt-4">
                            {/* {
                                // question && question.incorrect_answers?.map(ans =>
                                question && combineArr(question?.incorrect_answers, question?.correct_answer)?.map(ans =>
                                    value === ans ? <CheckBox key={ans} checked handleChange={handleChange} label={ans} /> : <CheckBox key={ans} handleChange={handleChange} label={ans} />)
                            } */}
                            {
                                [...question.incorrect_answers, question.correct_answer].map(ans =>
                                    value === ans ? <CheckBox key={ans} checked handleChange={handleChange} label={ans} /> : <CheckBox key={ans} handleChange={handleChange} label={ans} />)
                            }

                        </div>

                        <div>
                            {
                                index === questions.length - 1 ? (<button onClick={() => handleSubmit(question)} className="flex items-center gap-2 bg-purple-700 px-4 py-2 rounded-full text-white">Submit</button>)
                                    : (<button onClick={() => handleNext(question)} className="flex items-center gap-2 bg-purple-700 px-4 py-2 rounded-full text-white">Next Question <BsArrowRight /></button>)}
                        </div>
                    </React.Fragment>
                ))
            }

        </div>
    </div>
}

export default Quiz;