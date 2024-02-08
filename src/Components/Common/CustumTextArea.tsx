import React from 'react';

const CustumTextArea = (props:any) => {
    const { label , placeHolderText ,  } = props
     
    return (
        <div  className='text-black text-[20px] w-[100%] xl:w-[685px] 
        flex flex-col items-start'>
            <span className='pr-1 mb-1'>{label}</span>
            <textarea
             placeholder={placeHolderText} 
             className=' border border-[#CACACA] h-52 w-full rounded-[16px] py-2 px-4
             placeholder:text-[#D9D9D9] placeholder:text-[20px]'
             cols={10}>
            </textarea>

            
        </div>
        
    );
};

export default CustumTextArea;