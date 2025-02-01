import { auth } from "@/auth"

const page = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id
    const session = auth()
    
  return (
    <div>page</div>
  )
}

export default page