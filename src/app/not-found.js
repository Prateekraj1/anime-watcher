const page404 = () => {
    return (
        <div className="p-[72px_16px_48px]">
            <div className="max-w-[1224px] mx-auto">
                <div className="flex flex-col items-center">
                    <div className="table-large text-n400">ERROR 404</div>
                    <div className="h-01-bold text-n700 my-[12px] text-center sm:h-08-bold">Uh oh! Looks like you crashed.</div>
                    <div className="text-[24px] leading-[1.5] text-n700 mb-[16px] text-center sm:text-[16px] sm:leading-[1.375]">
                        The page you are looking for could not be found.
                    </div>
                    <a
                        href="/"
                        className="btn-primary mb-[48px] p-[4px_40px] leading-[2.4] text-[18px] rounded-[40px] sm:mb-[40px] sm:p-[3px_17px] sm:body-main-medium"
                    >
                        Take off again
                    </a>
                </div>
            </div>
        </div>
    );
};

export default page404;