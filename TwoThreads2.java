// Begge java filer giver samme resultat, da java kører med 2 forskellige tråde, main og t:

import java.math.BigInteger;

public class TwoThreads2 {
    private static String result = "pending";

    private static synchronized void setResult(String value) {
        result = value;
    };

    private static synchronized String getResult() {
        return result;
    };

    public static void main(String[] args) {
        System.out.println("Creating a new thread");

        Runnable r = new Runnable() {
            public void run() {

                BigInteger i = new BigInteger("0");
                BigInteger j = new BigInteger("0");

                while (i.compareTo(new BigInteger("30000000")) < 0) {
                    i = i.add(new BigInteger("1"));
                    j = j.add(i);
                };
                setResult(("resolved"));
            };
        };

        Thread t = new Thread(r);
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