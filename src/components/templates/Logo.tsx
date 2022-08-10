export default function Logo(){
    return (
        <div className={`bg-white h-12 w-12 rounded-full flex flex-col items-center justify-center `}>
            <div className="h-3 w-3 rounded-full bg-red-600 mb-1"/>
            <div className="flex mt-1">
                <div className="h-3 w-3 rounded-full bg-yellow-600 mr-1" />
                <div className="h-3 w-3 rounded-full bg-green-600 ml-1" />
            </div>
        </div>
    )
}