import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
    name: "author",
    title: "Authors",
    type: 'document',
    icon: UserIcon, // проверить на гитхабе на наличия ошибок
    fields: [
        defineField({
            name: 'id',
            type: 'number',
        }),
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'username',
            type: 'string',
        }),
        defineField({
            name: 'email',
            type: 'string',
        }),
        defineField({
            name: 'image',
            type: 'url',
        }),
        defineField({
            name: 'bio',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'name',
        }
    }
})