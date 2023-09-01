'use client'
import { BsCheck, BsCheck2 } from "react-icons/bs";
import Nav from "../common/Nav";
import Chip from "./Chip";
import { FcCancel } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { getCookie } from "cookies-next";
import { Answer } from "@/utils/interface";
import { useEffect, useState } from "react";
import { checkPass } from "@/utils/commonMethods";

const Result = () => {
    const [answers, setAnswers] = useState<Answer[]>([]);
    const result = checkPass(answers);

    useEffect(() => {
        let answerJson = getCookie('answers');
        if (answerJson) setAnswers(JSON.parse(answerJson as string))
    }, [])

    return <div>
        <Nav />

        <div className="flex items-center justify-center mt-4 px-4">
            <div className="max-w-5xl">
                <p className="text-center text-xl font-bold">Results</p>
                <p className="text-center text-lg font-bold mb-4">
                    {
                        result === 'Pass' ? (<span className="text-green-700">Pass</span>) :
                            (<span className="text-red-700">Fail</span>)
                    }

                </p>

                {
                    answers.map((ans, index) => (
                        <div key={index} className="flex flex-col gap-2 my-4">
                            <p className="text-lg font-bold mb-2">{ans.question}</p>
                            <p>Your Answer</p>

                            <Chip success={ans.correct_answer === ans.your_answer ? true : false}>{ans.your_answer}</Chip>
                            <p>Right Answer</p>
                            <Chip success={true}>{ans.correct_answer}</Chip>
                        </div>
                    ))
                }


            </div>
        </div>
    </div>
}

export default Result;