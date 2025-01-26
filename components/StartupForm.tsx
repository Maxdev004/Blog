"use client"

import { useState } from "react"
import { Input } from "./ui/input"

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
    </form>
  )
}

export default StartupForm