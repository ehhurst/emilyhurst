import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {Project} from "@/lib/types";


export default function ProjectCard( {project }: {project: Project}) {
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
            <div className="flex flex-wrap justify-end gap-1">
              {project.tags.map((tag:string) => (
                <Badge key={tag}variant='secondary' className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>

          </CardHeader> { /* cardheader end */}


          { /* Begin project card content */}
          <CardContent className="space-y-4">



          </CardContent> { /* End project card content */}

        </Card>
    );
}