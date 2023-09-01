import Quiz from "@/components/Quiz";
import { getQuestions } from "@/lib/getQuestions";

const Page = async () => {
    const questions = await getQuestions();

    return <Quiz questions={questions.results || []} />
}

export default Page;