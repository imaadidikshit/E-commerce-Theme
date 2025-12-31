
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function SizingPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-headline text-center">Sizing Guide</h1>
            <div className="max-w-3xl mx-auto mt-8">
                <p className="text-muted-foreground mb-8 text-center">Our sizing is designed for a modern, relaxed fit. If you are between sizes, we recommend sizing up.</p>
                <h2 className="text-2xl font-headline mb-4">Clothing (Unisex)</h2>
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
                            <TableCell>XS</TableCell>
                            <TableCell>34-36</TableCell>
                            <TableCell>28-30</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>S</TableCell>
                            <TableCell>36-38</TableCell>
                            <TableCell>30-32</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>M</TableCell>
                            <TableCell>38-40</TableCell>
                            <TableCell>32-34</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>L</TableCell>
                            <TableCell>40-42</TableCell>
                            <TableCell>34-36</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>XL</TableCell>
                            <TableCell>42-45</TableCell>
                            <TableCell>36-39</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                 <h2 className="text-2xl font-headline mt-12 mb-4">Rings</h2>
                 <p className="text-muted-foreground mb-4">Use a piece of string to measure your finger, then compare to the circumference below.</p>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Size</TableHead>
                            <TableHead>Circumference (mm)</TableHead>
                        </TableRow>
                    </TableHeader>
                     <TableBody>
                        <TableRow><TableCell>5</TableCell><TableCell>49</TableCell></TableRow>
                        <TableRow><TableCell>6</TableCell><TableCell>51.5</TableCell></TableRow>
                        <TableRow><TableCell>7</TableCell><TableCell>54</TableCell></TableRow>
                        <TableRow><TableCell>8</TableCell><TableCell>56.6</TableCell></TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
