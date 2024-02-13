import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"
import { Dispatch, SetStateAction } from "react";
import { Lesson } from "@prisma/client";
import { api } from "~/trpc/react";
import Spinner from "./Spinner";

export default function Lessons(
    { selected, setSelected }:
        {
            selected: Lesson | undefined,
            setSelected: Dispatch<SetStateAction<Lesson | undefined>>
        }
) {
    const { data: lessons, isLoading } = api.zen.lesson.findMany.useQuery({});

    if (isLoading) {
        return (
            <div className="w-max rounded-3xl px-4 py-2 my-2 flex max-w-s bg-white/10">
                <Spinner className="w-6 h-6 place-self-center" />
            </div>
        );
    }

    return (
        <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
                <CommandEmpty>No lessons found.</CommandEmpty>
                <CommandGroup heading="Lessons">
                    {
                        lessons?.map(
                            (lesson) => {
                                return <CommandItem key={lesson.id} onSelect={() => setSelected(lesson)}>{
                                    /# .*/.exec(lesson.content) ?? lesson.id}</CommandItem>;
                            }
                        )
                    }
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
