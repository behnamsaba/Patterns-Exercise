import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormColor = ({handler}) => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            color:""
        },
        onSubmit : (values) => {
            handler(values)
            navigate('/colors')

        },
        validationSchema:Yup.object({
            //firstname faghat string va bisthar az 10 harf nabashe
            color: Yup.string().max(10, "must be 15 char or less").required("required")
            
        })

    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="color">Color</label>
            <input id="color" type="text" {...formik.getFieldProps('color')}/>

            <button type='submit'>Add Color</button>
        </form>
    )

}

export default FormColor
