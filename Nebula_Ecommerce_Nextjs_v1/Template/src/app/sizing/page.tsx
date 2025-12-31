
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const metadata = {
  title: "Sizing Guide",
  description: "Find your perfect fit with the Aether sizing guide for clothing and jewelry.",
};


export default function SizingPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-headline">Sizing Guide</h1>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                   Our sizing is designed for a modern, relaxed fit. If you are between sizes, we recommend sizing up.
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Clothing (Unisex)</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Size</TableHead>
                                    <TableHead>Chest (in)</TableHead>
                                    <TableHead>Waist (in)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">XS</TableCell>
                                    <TableCell>34-36"</TableCell>
                                    <TableCell>28-30"</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">S</TableCell>
                                    <TableCell>36-38"</TableCell>
                                    <TableCell>30-32"</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">M</TableCell>
                                    <TableCell>38-40"</TableCell>
                                    <TableCell>32-34"</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">L</TableCell>
                                    <TableCell>40-42"</TableCell>
                                    <TableCell>34-36"</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">XL</TableCell>
                                    <TableCell>42-45"</TableCell>
                                    <TableCell>36-39"</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Rings</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="text-sm text-muted-foreground mb-4">Use a piece of string or paper to measure the circumference of your finger, then compare to the chart below.</p>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>US Size</TableHead>
                                    <TableHead>Circumference (mm)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><TableCell className="font-medium">5</TableCell><TableCell>49.0 mm</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">6</TableCell><TableCell>51.5 mm</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">7</TableCell><TableCell>54.0 mm</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">8</TableCell><TableCell>56.6 mm</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">9</TableCell><TableCell>59.1 mm</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
