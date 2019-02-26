export class Task{
    // public Status: boolean;
    public QuoteType: string;
    public QuoteID: Number;
    public Contact: string;
    public Task: string;
    public DueDate: string;
    public Quote: string;
    public TaskDiscription: string;
    constructor(QuoteType: string, ID: Number, contact: string, task: string, duedate: string,
        Quote: string, discription:string){
            // this.Status = Status;
            this.QuoteType = QuoteType;
            this.QuoteID = ID;
            this.Contact = contact;
            this.Task = task;
            this.DueDate = duedate;
            this.Quote = Quote;
            this.TaskDiscription = discription;
    }
}