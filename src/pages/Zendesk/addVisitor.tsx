import { useEffect, useState } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function addShortcut() {
  const dispatch = useDispatch();
  const [inputFields, setInputFields] = useState([{ value: '' }]);
  const [modal, setModal] = useState<any>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const options = ["Visitor name", "Visitor email", "Visitor country", "Visitor city", "Visitor browser", "Visitor name", "Visitor email"];

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option); 
    setIsOpen(false);
  };

  const navigate = useNavigate();

    useEffect(() => {
        dispatch(setPageTitle('Banned')); 
      }, []);

      //addmore ---
    const handleAddField = () => {
        setInputFields([...inputFields, { value: '' }]);
       };
   
       const handleRemoveField = (index: number) => {
           const fields = [...inputFields];
           fields.splice(index, 1);
           setInputFields(fields);
       };
   
       const handleInputChange = (index: number, event: any) => {
           const fields = [...inputFields];
           fields[index].value = event.target.value;
           setInputFields(fields);
       };

  return (
    <div>
        <div className='gap-8 w-full mt-4 flex text-gray-600 font-normal text-[12.5px] leading-4'>
            <div className='w-[48.5%]'>
                <div className='flex w-full'>
                    <label className='w-[22%] mt-1'>IP address</label>
                    <input type='text' className='w-44 rounded py-1.5 px-1 duration-300 border border-gray-300 focus:ring focus:border-blue-500 focus:ring-blue-400'/>
                </div>
                <div className='flex w-full mt-2'>
                    <label className='w-[22%] mt-0.5'>Reason</label>
                    <textarea className='w-[60%] rounded py-1.5 px-1 h-[4.5rem] duration-300 border border-gray-300 focus:ring focus:border-blue-500 focus:ring-blue-400'></textarea>
                </div>  
                <hr className='bg-gray-200 mt-4' />
                <div className='flex mt-4 flex gap-3'>
                    <button type='submit' className='py-1.5 border px-3 bg-[#f8f9f9] shadow-none text-gray-400 rounded font-bold'>Create ban</button>
                    <button className='py-1.5 px-3 border border-gray-300 hover:bg-gray-200 font-bold rounded' type='button' onClick={() => {localStorage.setItem('header', 'Banned visitors'), navigate('/zendesk/banned')}}>Cancel</button>
                </div>
            </div>
        </div>    
    </div>
  )
}

