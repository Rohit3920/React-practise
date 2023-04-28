import './style.css'
import style from './Styling.module.css'


function Styling() {

    const InlineStyle = "style = {{backgroundColor : 'red', color :'white'}}";

    const ModuleStyle = "{style.success}"

    return (
        <div>
            <h1>Styling with multiple methods</h1>

            <p style={{ backgroundColor: 'red', color: 'white' }}><i>Frist</i> :- inline Style as <br /> <b>" {InlineStyle} "</b></p> <br />
            <p className='primary'> <i>Second </i> : Style Sheet  <br /> <b>  create style.css file for styling</b> </p><br />
            <p className={style.success}><i>third </i> : Module Style <br /><b>create module file Styling.module.css and <br /> linked ( import style from './Styling.module.css' ) <br /> then define ( className={ModuleStyle} ) </b> </p>
        </div>
    )

}

export default Styling;