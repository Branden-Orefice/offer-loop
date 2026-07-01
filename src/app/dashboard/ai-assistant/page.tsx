import AiInterviewPractice from "@/components/ai-interview-practice";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AiAssistantPage = () => {
  return (
    <div className="px-6">
      <Tabs defaultValue="interview-practice">
        <TabsList>
          <TabsTrigger value="interview-practice">
            Intervew Practice
          </TabsTrigger>
          <TabsTrigger value="resume-analysis">Resume Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="interview-practice">
          <AiInterviewPractice />
        </TabsContent>
        <TabsContent value="resume-analysis"></TabsContent>
      </Tabs>
    </div>
  );
};

export default AiAssistantPage;
