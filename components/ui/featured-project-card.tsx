import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {Project} from "@/lib/types";



export default function FeaturedProjectCard( {project }: {project: Project}) {
    return (
        <Card className="group rounded-2xl border-black/10 bg-white/70 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg">

          { /* Start cardheader */}
          <CardHeader className="space-y-2">

            { /* Project Title */}
            <div className="flex items-start justify-between gap-3">
              <CardTitle className="text-lg font-semibold">
                {project.title}
                </CardTitle>
            </div>

            { /* tag area */}
            <div className="flex flex-wrap justify-start gap-1">
              {project.tags.map((tag:string) => (
                <Badge key={tag}variant='secondary' className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>

          </CardHeader> { /* cardheader end */}


          { /* Begin project card content */}
          <CardContent className="space-y-4">
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
                {project.description}
            </p>
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
                width={400}
                height={225}
                className="rounded-md border border-black/10 bg-zinc-100 object-cover"/>

            <div className="flex gap-2 justify-between items-center">
                <div className="flex flex-wrap justify-end gap-1">
                    {project.languages.map((language:string) => (
                        <Badge key={language}variant='secondary' className="rounded-full">
                        {language}
                        </Badge>
                    ))}
                </div>

                <div className="flex gap-2 justify-end">
                    {project.href && (
                        <Button asChild variant="default">
                            <Link href={`project/${project.name}`}>View Project</Link>
                        </Button>
                    )}
                    </div>


            </div>



          </CardContent> { /* End project card content */}

        </Card>
    );
}