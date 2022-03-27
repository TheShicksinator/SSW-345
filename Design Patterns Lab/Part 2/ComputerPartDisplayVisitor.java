public class ComputerPartDisplayVisitor implements ComputerPartVisitor {
    @Override
    public void visit(Computer computer) {
        System.out.println("displaying Computer");
    }

    @Override
    public void visit(Mouse mouse) {
        System.out.println("displaying Mouse");
    }

    @Override
    public void visit(Keyboard keyboard) {
        System.out.println("displaying Keyboard");
    }

    @Override
    public void visit(Monitor monitor) {
        System.out.println("displaying Monitor");
    }
}
