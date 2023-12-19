interface PageProps {
    searchParams: {
        [key: string] : string | string[] | undefined
    }
}

const VerifyEmailPage = ({ searchParams }: PageProps) => {
    const token = searchParams.token
    const toEmail = searchParams.to

    return (
        <div className="container flex flex-col items-center justify-center h-[calc(100vh-72px)] lg:px-0">
            <div className="flex flex-col mx-auto w-full sm:w-80 justify-center">
                {token && typeof token === 'string' ? (
                    <div className="grid gap-6">

                    </div>
                ) : (
                    <div className="flex flex-col h-full items-center justify-center space-y-2">
                        <h2 className="text-2xl font-semibold">CHECK YOUR EMAIL</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default VerifyEmailPage