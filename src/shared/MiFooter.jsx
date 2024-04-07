import {FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const name="Flower";
const sections=[
    {title:'Movies',items:['Marketing', 'Analytics', 'Commerce','DataTransfer','Cloud']},
    {title:'Support',items:['Pricing','Documentation','Guides','API','Status']},
    {title:'Company',items:['About','Blog','Jobs','Partners']},
];

const items=[
    {name:'Facebook',icon:FaFacebook, link:'https://facebook.com'},
    {name:'Github',icon:FaGithub, link:'https://github.com'},
    {name:'Instagram',icon:FaInstagram, link:'https://instagram.com'},
    {name:'Twitter',icon:FaTwitter, link:'https:twitter.com'}
]

export const MiFooter=()=>{
    return (
            <>
            <footer className='w-full mt-auto text-gray-200 py-y px-4 border-t border-gray-600'>
                <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2
                border-gray-600 py-8'>
                    {
                        sections.map((section, index)=>(
                            <div key={index}>
                                <h6 className='font-bold uppercase p-2'>
                                    {section.title}
                                </h6>
                                <ul>
                                    {section.items.map((item,i)=>(
                                        <li key={i} className='ps-2 py-1 text-gray-400 hover:text-white cursor-pointer'>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                
                            </div>
                        ))
                    }
                    <div className='col-span-2 pt-8 md:pt-2'>
                            <p className='font-bold-uppercase'>Subscribe to our newsletter</p>
                            <p className='py-4'>The latest updates, articles and resources, sent to your inbox weekly</p>
                            <form className='flex flex-col sm:flex-row'>
                                <input type="email" placeholder='Enter email adress' className='w-full p-2 mr-4 rounded-md mb-4'/>
                                <button className='p-2 mb-4 border rounded'>Subscribe</button>
                            </form>
                    </div>
                </div>
                <div className='flex flex-col max-w-[1240px] px-2 py-6 mx-auto justify-between md:items-center
                sm:flex-row text-center text-gray-500'>
                    <p className='py-6'>
                        2024 Movie Finder. All rights reserved
                    </p>
                    <div className='flex justify-between sm:w-[300px] text-2xl py-6'>
                        {
                            //se recomienda no usar el index como key!!
                            items.map((x,index)=>{
                                return <x.icon key={index} className='hover:text-white cursor-pointer'/>
                            })
                        }

                    </div>
                </div>
            </footer>
            </>
    )
}