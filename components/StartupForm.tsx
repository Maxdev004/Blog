"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

import dynamic from "next/dynamic"
import { Button } from "./ui/button"
import { Send } from "lucide-react"
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

const StartupForm = () => {

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [pitch, setPitch] = useState("")

    const isPending = false


  return (
    <form action={() => {}} className="startup-form">
        <div>
            <label className="startup-form_label" htmlFor="title">TITLE</label>
            <Input
            id="title"
            name="title"
            className="startup-form_input"
            required
            placeholder="Startup Title"
            />
            {errors.title && <p className="startup-form_error">{errors.title}</p>}
        </div>

        <div>
            <label className="startup-form_label" htmlFor="decription">DESCRIPTION</label>
            <Textarea
            id="decription"
            name="decription"
            className="startup-form_textarea"
            required
            placeholder="Startup Decription"
            />
            {errors.decription && <p className="startup-form_error">{errors.decription}</p>}
        </div>

        <div>
            <label className="startup-form_label" htmlFor="category">CATEGORY</label>
            <Input
            id="category"
            name="category"
            className="startup-form_input"
            required
            placeholder="Startup Category (e.g. Health, Finance, etc.)"
            />
            {errors.category && <p className="startup-form_error">{errors.category}</p>}
        </div>

        <div>
            <label className="startup-form_label" htmlFor="link">Image URL</label>
            <Input
            id="link"
            name="link"
            className="startup-form_input"
            required
            placeholder="Startup Image URL"
            />
            {errors.link && <p className="startup-form_error">{errors.link}</p>}
        </div>

        <div data-color-mode="light">
            <label className="startup-form_label" htmlFor="pitch">PITCH</label>
            <MDEditor
                value={pitch}
                onChange={(value) => setPitch(value as string)}
                id="pitch"
                preview="edit"
                height={300}
                style={{ borderRadius: "20px", overflow: "hidden" }}
                textareaProps={{
                    placeholder: "Briefly describe your startup in markdown",
                }}
                previewOptions={{
                    disallowedElements: ["style"],
                }}
            />
            {errors.link && <p className="startup-form_error">{errors.link}</p>}
        </div>

        <Button type="submit" className="startup-form_btn text-white" disabled={isPending}>{isPending ? "Submitting..." : "Submit Tour Pitch"}<Send className="size-6 ml-l"/></Button>

    </form>
  )
}

export default StartupForm