import { useCreateLesson, useFindManySubject } from "~/lib/hooks";
import { api } from "~/trpc/react";
import MDEditor, { commands } from "@uiw/react-md-editor";
import { useState } from "react";
import NewSubject from "./NewSubject";
import Spinner from "../Spinner";

export default function NewLessonForm() {
    const { trigger: createLesson, error } = useCreateLesson();
    const { data: user, isLoading } = api.user.getMe.useQuery();
    const { data: subjects, isLoading: isSubLoading } = useFindManySubject();
    const [content, setContent] = useState<string | undefined>("# New Lesson\nLorem ipsum yadda yadda yadda.");

    if (isLoading || isSubLoading) {
        return (
            <div className="w-max flex items-center rounded-3xl px-4 py-2 my-2 bg-white/10">
                <Spinner className="w-6 h-6 place-self-center" />
            </div>
        );
    }

    return (
        <div className="container flex flex-col p-4 gap-4">
            <NewSubject />
            <div className="container rounded-3xl px-0 py-4 gap-4 flex flex-col w-11/12 bg-white/10">
                {error !== undefined && <p>{JSON.stringify(error)}</p>}
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const subject = data.get('subject')?.toString();

                    if (!user || !subject || !content) {
                        return;
                    }

                    await createLesson({
                        data: {
                            authorId: user.id,
                            subName: subject,
                            content: content
                        }
                    });
                }}>
                    <div className="container flex flex-row justify-between content-between">
                        <div className="container flex flex-row items-center">
                            <label htmlFor="subject" className="px-4 py-2 my-2">Subject</label>
                            <select name="subject" className="rounded-full px-4 py-2 my-2 bg-white/10" required>
                                {subjects?.map((sub) => <option value={sub.name}>{sub.name}</option>)}
                            </select>
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            className="rounded-full px-4 py-2 my-2 bg-white/10"
                        />
                    </div>
                </form>
                <div className="container min-h-96">
                    <MDEditor
                        value={content}
                        onChange={setContent}
                        commands={[
                            commands.codeEdit,
                            commands.codePreview]}
                        hideToolbar
                        style={{
                            backgroundColor: "#15162c",
                            borderRadius: "1.4rem",
                            padding: "0.5rem",
                            font: "inherit",
                            minHeight: "24rem",
                        }}
                        previewOptions={{
                            style: {
                                backgroundColor: "#15162c",
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

