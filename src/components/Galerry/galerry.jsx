// ! Import Component 
import Header2 from "../Header2/header2"
import Content from "../Contents/content";
import "./galerry.css"

export default function Galerry(props) {
    return(
        <section className="galerry">
            <Header2 />
            <Content />
        </section>
    )
}