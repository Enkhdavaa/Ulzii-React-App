import man from './images/man.png'

export default function Person()
{
    return <div className='px-5 max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-full' src={ man } alt='Person' />
        <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'> Here is my name </div>
            <p className='text-gray-700 text-base'>
                Here is some writings
            </p>
        </div>
        <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#photography</span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#travel</span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#winter</span>
        </div>
    </div>
}