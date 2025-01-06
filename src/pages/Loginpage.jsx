import AuthForms from "../components/AuthForm"

const Loginpage = () => {
  return (
    <div className='h-[100vh] w-[100vw] bg-cover bg-center  overflow-hidden object-cover relative md:bg-updated-frontpage xl:bg-updated-frontpage lg:bg-updated-frontpage bg-updated-frontpage2 sm:bg-updated-frontpage2'>
        <AuthForms />
    </div>
  )
}

export default Loginpage