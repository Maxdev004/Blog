import { auth } from "@/auth"
import { client } from "@/sanity/lib/client"
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries"
import { notFound } from "next/navigation"

const page = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id
    const session = auth()

    const user = await client.fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id })
    if(!user) return notFound()

  return (
    <div>
        Page
    </div>
  )
}

export default page