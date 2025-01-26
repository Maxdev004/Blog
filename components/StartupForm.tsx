"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const StartupForm = () => {

    const [errors, setErrors] = useState<Record<string, string>>({})

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
    </form>
  )
}

export default StartupForm