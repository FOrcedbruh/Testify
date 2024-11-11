import { FC, useState } from "react";
import styles from './TestPage.module.scss'
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTests } from "../../../api/tests/handlers";
import { ITest } from "../../../types/ITest";
import { TestItem } from "../../components/TestItem/TestItem";
import { AnimatePresence, motion } from "framer-motion";

const TestPage: FC = () => {

    const [step, setStep] = useState<number>(0)
    const [result, setResult] = useState<number>(0)

    const queryClient = useQueryClient()

    const { data, isLoading } = useQuery<ITest[]>({queryKey: ["tests"], queryFn: getTests})

    if (isLoading) {
        return (
            <div className={styles.loading}>
                Загрузка...
            </div>
        )
    }

    if (step === data?.length) {
        return (
            <div className={styles.result}>
                <h1>Ваш результат</h1>
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3}}>
                    {result} / <span>{data.length}</span> 
                </motion.h1>
            </div>
        )
    }

    return (
        <section className={styles.window}>
            <AnimatePresence>
                {data && <TestItem
                            allSteps={data.length}
                            step={step} 
                            setStep={setStep} 
                            setResult={setResult} 
                            result={result} 
                            id={step} 
                            correctAnswer={data[step].correctAnswer} 
                            answers={data[step].answers}
                            question={data[step].question}/>}
            </AnimatePresence>
        </section>
    )
}

export default TestPage;