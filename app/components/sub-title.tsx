import TypingText from "@/components/ui/shadcn-io/typing-text-subheading";
interface subTitle {
    title: string,
    subText: string
}

export default function SubTitle({title,subText} : subTitle){
    return(
        <div className="section-header">
            <h2>{title}</h2>
            <TypingText
            text={[`${subText}`]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="tmt-2 italic"
            textColors={['#fff']}
            variableSpeed={{ min: 50, max: 120 }}
            />
        </div>
    )
}