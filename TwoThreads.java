// Begge java filer giver samme resultat, da java kører med 2 forskellige tråde, main og t:

public class TwoThreads {
    private static String result = "pending";

    private static synchronized void setResult(String value) {
        result = value;
    };

    private static synchronized String getResult() {
        return result;
    };

    public static void main(String[] args) {
        System.out.println("Creating a new thread");

        Thread t = new Thread(new Runnable() {
            public void run() {
                try {
                Thread.sleep(10000);
                setResult("resolved");
                } catch (Exception e) {
                    e.printStackTrace();
                };
            };
        });
        t.start();
        System.out.println("Result: " + getResult());

        try {
            t.join();
        } catch (Exception e) {
            e.printStackTrace();
        };
        System.out.println("Thread has finished and result is: " + getResult());
    };

};