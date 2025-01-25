/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState } from "react";
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "../ui/select";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { 
    Popover, 
    PopoverContent, 
    PopoverTrigger 
} from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { cn } from "../lib/utils";
import { sendEmail } from "../../actions/SendEmail";
import alert from "../utils/alert";
import { CalendarIcon } from "lucide-react";

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", 
    "Antigua and Barbuda", "Argentina", "Armenia", "Australia", 
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", 
    "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", 
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", 
    "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", 
    "Cambodia", "Cameroon", "Canada", "Central African Republic", 
    "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", 
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", 
    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
    "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", 
    "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", 
    "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", 
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", 
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", 
    "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", 
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", 
    "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", 
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", 
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", 
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", 
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
    "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", 
    "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", 
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", 
    "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
    "Saint Kitts and Nevis", "Saint Lucia", 
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
    "Seychelles", "Sierra Leone", "Singapore", "Slovakia", 
    "Slovenia", "Solomon Islands", "Somalia", "South Africa", 
    "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname", 
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", 
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", 
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", 
    "Zambia", "Zimbabwe"
];

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [date, setDate] = useState<Date | undefined>(undefined);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            // Ensure a country is selected
            if (!selectedCountry) {
                alert.warn("Please select a country.");
                setIsLoading(false);
                return;
            }

            // Add date validation if required
            if (!date) {
                alert.warn("Please select an arrival date.");
                setIsLoading(false);
                return;
            }

            formData.append("arrivalDate", date.toISOString());
            formData.append("country", selectedCountry);

            const result = await sendEmail(null, formData);

            if (result.success) {
                alert.success("Message Sent Successfully");

                // Reset form fields
                e.currentTarget.reset();
                setSelectedCountry("");
                setDate(undefined);
            } else {
                alert.warn(result.message);
            }
        } catch (error) {
            const errorMsg =
                error instanceof Error
                    ? error.message
                    : "An unexpected error occurred";
            // alert.error(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    

    return (
        <div>
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-customGreen text-center my-20">
                    Send a Message
                </h1>
            </div>
            <div className="bg-customLightGreen">
                <div className="container mx-auto px-4 py-16">
                    <div className="w-full mx-auto rounded-lg md:p-8">
                        <form
                            onSubmit={handleSubmit} // Attach the handleSubmit function here
                            className="flex-row space-y-6 md:grid md:grid-cols-2 md:space-y-0 text-customGray gap-6"
                        >
                            <div className="col-span-1">
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    disabled={isLoading}
                                    className="bg-white border-none rounded-[36px] pl-5 text-customGray pt-3"
                                />
                            </div>

                            <div>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    disabled={isLoading}
                                    className="bg-white border-none rounded-[36px] pl-5 pt-3"
                                />
                            </div>
                            <div>
                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                    disabled={isLoading}
                                    className="bg-white border-none rounded-[36px] pl-5 pt-3"
                                />
                            </div>

                            <Select
                                name="country"
                                value={selectedCountry}
                                required
                                onValueChange={(value) => setSelectedCountry(value)}
                                disabled={isLoading}
                            >
                                <SelectTrigger className="bg-white z-50 border-none rounded-[36px] pl-5 pt-3">
                                    <SelectValue placeholder="Country" />
                                </SelectTrigger>
                                <SelectContent className="bg-customSilver text-customGreen rounded-[36px] px-3 pt-3 max-h-[300px] overflow-y-auto">
                                    {countries.map((country) => (
                                        <SelectItem key={country} value={country}>
                                            {country}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-between text-left bg-white border-none rounded-[36px] pl-5 pt-3 text-[#9CA3AF] font-medium",
                                            date ? "text-customGray" : "text-[#9CA3AF]"
                                        )}
                                    >
                                        {date ? format(date, "PPP") : "Arrival Date"}
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 z-40 bg-customSilver text-customGreen" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <Input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                disabled={isLoading}
                                className="bg-white border-none rounded-[36px] pl-5 pt-3 text-[#787878] font-medium"
                            />
                            <Textarea
                                name="message"
                                placeholder="Message"
                                required
                                disabled={isLoading}
                                className="col-span-2 h-40 bg-white border-none resize-none rounded-[36px] pl-5 pt-3 text-[#787878] font-medium"
                            />
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="col-span-2 bg-customGreen hover:bg-customGreen/90 text-white w-32 mx-auto rounded-[36px] pl-5 pt-3"
                            >
                                {isLoading ? "Sending..." : "Submit"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}