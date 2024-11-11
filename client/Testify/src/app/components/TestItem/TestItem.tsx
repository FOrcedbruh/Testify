import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from './TestItem.module.scss'
import { ITest } from "../../../types/ITest";
import { motion, AnimatePresence } from "framer-motion";

interface ITestItemProps {
    id: number,
    question: string,
    answers: string[],
    correctAnswer: number,
    setStep: Dispatch<SetStateAction<number>>,
    setResult: Dispatch<SetStateAction<number>>,
    step: number,
    result: number,
    allSteps: number
}
interface ISelected extends ITest {
    id: number
}

export const TestItem: FC<ITestItemProps> = ({ allSteps, correctAnswer, question, answers, setStep, step,  setResult, result }) => {

    const [selected, setSelected] = useState<ISelected | null>(null);

    const clickHandler = (clickableIndex: number) => {
        if (correctAnswer === clickableIndex) {
            setResult(result + 1)
        }

        setStep(step + 1)
        setSelected(null)
    }

    const variants = {
        initial: {
            opacity: 0,
        },
        animate: (custom: number) => ({
            opacity: 1,
            transition: { delay: custom * 0.2, duration: 0.6 }
        })
    }


    return (
        <section className={styles.testItem}>
            <div className={styles.currentStep}>
                {step} / {allSteps}
            </div>
            <h1>{question}</h1>
            <ul className={styles.answers}>
                {answers.map((answer, index) => {
                    return (
                        <motion.li 
                            variants={variants}
                            custom={index}
                            initial={"initial"}
                            animate={"animate"}
                            style={{border: selected?.id === index ? "1px solid #4CC9FE" : "1px solid #1e1e1e", scale: selected?.id === index ? 1.03 : 1, transition: "all .3s ease"}} 
                            onClick={() => setSelected({
                                answers,
                                correctAnswer,
                                question,
                                id: index
                            })}>
                            {answer}
                        </motion.li>
                    )
                })}
            </ul>
            <AnimatePresence>
                {selected !== null && <motion.button initial={{opacity: 0}} animate={{opacity: 1}} className={styles.btn} onClick={() => clickHandler(selected?.id!)}>Дальше</motion.button>}
            </AnimatePresence>
        </section>
    )
}