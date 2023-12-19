interface PageProps {
    searchParams: {
        [key: string] : string | string[] | undefined
    }
}

const VerifyEmailPage = ({ searchParams }: PageProps) => {
    return (
        <div className="container flex flex-col items-center justify-center h-[calc(100vh-72px)] lg:px-0">
            <div className="flex flex-col mx-auto w-full sm:w-80 justify-center">
                
            </div>
        </div>
    )
}

export default VerifyEmailPage